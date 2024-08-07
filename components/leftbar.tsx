"use client";
import { ROUTES } from "@/lib/routes-config";
import Anchor from "./anchor";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, NavMenu } from "./navbar";
import { Button } from "./ui/button";
import {AlignLeftIcon, ChevronDown, ChevronRight} from "lucide-react";
import { FooterButtons } from "./footer";
import {useEffect, useRef, useState} from "react";

export function Leftbar() {
  return (
    <aside className="md:flex hidden flex-[0.9] min-w-[230px] sticky top-16 flex-col h-[92.75vh] overflow-y-auto">
      <ScrollArea className="py-4">
        <AnimatedMenu />
      </ScrollArea>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 mt-3 mx-2 px-5">
            <NavMenu isSheet />
          </div>
          <div className="mx-2 px-5">
            <AnimatedMenu isSheet />
          </div>
          <div className="p-6 pb-4 flex gap-2">
            <FooterButtons />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function Menu({ isSheet = false }) {
  return (
    <>
      {ROUTES.map(({ href, items, title }) => {
        return (
          <div className="flex flex-col gap-3 mt-5" key={href}>
            <h4 className="font-medium sm:text-sm">{title}</h4>
            <div className="flex flex-col gap-3 sm:text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
              {items.map((subItem) => {
                const key = `/docs/${href}${subItem.href}`;
                const Comp = (
                  <Anchor
                    activeClassName="font-medium text-primary"
                    key={key}
                    href={key}
                  >
                    {subItem.title}
                  </Anchor>
                );
                return isSheet ? (
                  <SheetClose key={key} asChild>
                    {Comp}
                  </SheetClose>
                ) : (
                  Comp
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

function AnimatedMenu({ isSheet = false }) {
  const [openSection, setOpenSection] = useState(null);
  const contentRefs = useRef({});

  // Set open section when component mounts (client-side)
  useEffect(() => {
    // Check current URL
    const currentPath = window.location.pathname;

    // Try to find a section that matches the current URL
    const matchingSection = ROUTES.find(route => currentPath.startsWith(`/docs/${route.href}`));

    if (matchingSection) {
      setOpenSection(matchingSection.href);
    } else {
      // Fallback to localStorage
      const storedOpenSection = localStorage.getItem('openSection');
      if (storedOpenSection) {
        setOpenSection(storedOpenSection);
      }
    }
  }, []);

  const toggleSection = (section) => {
    const newOpenSection = openSection === section ? null : section;
    setOpenSection(newOpenSection);
    // Save the new state to localStorage
    if (newOpenSection !== null) {
      localStorage.setItem('openSection', newOpenSection);
    } else {
      localStorage.removeItem('openSection');
    }
  };

  useEffect(() => {
    // Set the height of the content elements based on the open section
    for (const section in contentRefs.current) {
      const el = contentRefs.current[section];
      if (el) {
        if (section === openSection) {
          el.style.setProperty('--content-height', `${el.scrollHeight}px`);
        } else {
          el.style.setProperty('--content-height', '0px');
        }
      }
    }
  }, [openSection]);

  return (
      <>
        {ROUTES.map(({ href, items, title }) => {
          const isOpen = openSection === href;
          return (
              <div className="flex flex-col gap-3 mt-5" key={href}>
                <button
                    onClick={() => toggleSection(href)}
                    className="flex items-center justify-between font-medium sm:text-sm"
                >
                  <h4>{title}</h4>
                  {isOpen ? <ChevronDown width={16} /> : <ChevronRight width={16} />}
                </button>
                <div
                    ref={(el) => (contentRefs.current[href] = el)}
                    className={`overflow-hidden`}
                    style={{ '--content-height': '0px' }}
                >
                  {isOpen && (
                      <div className="flex flex-col gap-3 sm:text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
                        {items.map((subItem) => {
                          const key = `/docs/${href}${subItem.href}`;
                          const Comp = (
                              <Anchor
                                  activeClassName="font-medium text-primary"
                                  key={key}
                                  href={key}
                              >
                                {subItem.title}
                              </Anchor>
                          );
                          return isSheet ? (
                              <SheetClose key={key} asChild>
                                {Comp}
                              </SheetClose>
                          ) : (
                              Comp
                          );
                        })}
                      </div>
                  )}
                </div>
              </div>
          );
        })}
      </>
  );
}
