import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"


const data = {
  user: {
    name: "Administrator",
    email: "bhakkaraipattu@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "BH, Akkaraipattu",
      logo: GalleryVerticalEnd,
      plan: "Dashboard",
    },
    
  ],
  navMain: [
    {
      title: "Correspondence",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "New entry",
          url: "/correspondence",
        },
        {
          title: "Assign Person",
          url: "/correspondence/cp_table",
        },
        {
          title: "View all",
          url: "#",
        },
      ],
    },
    {
      title: "Complainer",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "New complainer",
          url: "/complainer",
        },
        {
          title: "Filter",
          url: "#",
        },
      ],
    },
    {
      title: "Assign",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "List",
          url: "#",
        },
        
      ],
    },
    {
      title: "Utilities",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Unit",
          url: "/unit",
        },
        {
          title: "Designation",
          url: "/designation",
        },
      ],
    },
  ],
}

export default data