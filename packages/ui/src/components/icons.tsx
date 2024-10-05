import {
  BookUser,
  BriefcaseBusiness,
  Building,
  Check,
  ChevronRight,
  CircleDashed,
  Copy,
  Dot,
  Laptop,
  Loader2,
  LogOut,
  Moon,
  Settings,
  Sun,
  User,
} from "lucide-react"

export const Icons = {
  ChevronRight,
  Check,
  Clubs: Building,
  Copy,
  Dark: Moon,
  Deals: BriefcaseBusiness,
  Dot,
  Laptop,
  Light: Sun,
  Loader: Loader2,
  Logo: CircleDashed,
  LogOut,
  Players: BookUser,
  Settings,
  User,
}

export type Icon = (typeof Icons)[keyof typeof Icons]
export type IconKey = keyof typeof Icons
