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
          url: "#",
        },
        {
          title: "Filter",
          url: "#",
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
          url: "#",
        },
        {
          title: "Filter",
          url: "#",
        },
      ],
    },
    {
      title: "Response",
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
          url: "/dashboard/unit",
        },
        {
          title: "Designation",
          url: "#",
        },
      ],
    },
  ],
}

export default data