'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import Link from "next/link";
import {Button, ButtonGroup} from "@nextui-org/button";


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  

    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <Link href="/">
            <NavbarBrand>
              <p className="font-bold text-inherit">SIH</p>
            </NavbarBrand>
          </Link>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem>
            <Link color="foreground" href="/news">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/creator" color="forground">
              Creator
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/learn">
              Learn
            </Link>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }