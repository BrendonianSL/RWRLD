'use client';

import { Calendar, Camera, Home, Inbox, Search, Settings, Code } from "lucide-react"
import { useMonthStore } from "@/app/_store/MonthStore";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar"
import { Months } from "@/app/_data/MonthData";

// Menu items.
const items = [
  {
    title: "January",
    url: "#january",
    icon: Home,
  },
  {
    title: "Februrary",
    url: "#february",
    icon: Home,
  },
  {
    title: "March",
    url: "#march",
    icon: Home,
  },
  {
    title: "April",
    url: "#april",
    icon: Home,
  },
  {
    title: "May",
    url: "#may",
    icon: Home,
  },
  {
    title: "June",
    url: "#june",
    icon: Home,
  },
  {
    title: "July",
    url: "#july",
    icon: Home,
  },
  {
    title: "August",
    url: "#august",
    icon: Home,
  },
  {
    title: "September",
    url: "#september",
    icon: Home,
  },
  {
    title: "October",
    url: "#october",
    icon: Home,
  },
  {
    title: "November",
    url: "#november",
    icon: Home,
  },
  {
    title: "December",
    url: "#december",
    icon: Home,
  },
] satisfies {
  title: Months
  url: string
  icon: React.ComponentType
}[];

const socials = [
  {
    title: `Brendan's Instagram`,
    url: 'https://www.instagram.com/brendonianl/',
    icon: Camera,
  },
  {
    title: `Krista's Instagram`,
    url: 'https://www.instagram.com/p3ach2.0/',
    icon: Camera,
  }
]



export function AppSidebar() {

  // Set the button function.
  const changeMonth = useMonthStore((state) => state.setMonth);
  return (
    <Sidebar className="">
      <SidebarHeader>
        RWRLD
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup> {/* Monthly Lookbooks */}
          <SidebarGroupLabel>Monthly Lookbooks</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a onClick={() => changeMonth(item.title)}  href='#top'>
                      <item.icon />
                      <div className='font-outfit'>{item.title}</div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup> {/* Socials */}
          <SidebarGroupLabel>Socials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socials.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <div className='font-outfit'>{item.title}</div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>For The Nerds</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Code />
                    <a href='https://github.com/brendonianl/lookbook'>
                      <div className='font-outfit'>Github Repository</div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}