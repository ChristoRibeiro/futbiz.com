import {
  BookUser,
  BriefcaseBusiness,
  Building,
  Check,
  ChevronRight,
  CircleDashed,
  Copy,
  Dot,
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
  Deals: BriefcaseBusiness,
  Dot,
  Loader: Loader2,
  Logo: CircleDashed,
  LogOut,
  Moon,
  Players: BookUser,
  Settings,
  Sun,
  User,
}

export type Icon = (typeof Icons)[keyof typeof Icons]
export type IconKey = keyof typeof Icons
