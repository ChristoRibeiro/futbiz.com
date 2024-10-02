export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Club: {
        Row: {
          createdAt: string
          id: string
          leagueId: string
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          leagueId: string
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          leagueId?: string
          name?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Club_leagueId_fkey"
            columns: ["leagueId"]
            isOneToOne: false
            referencedRelation: "League"
            referencedColumns: ["id"]
          },
        ]
      }
      Contact: {
        Row: {
          clubId: string | null
          createdAt: string
          email: string | null
          id: string
          name: string
          phone: string | null
          type: Database["public"]["Enums"]["ContactType"]
          updatedAt: string
        }
        Insert: {
          clubId?: string | null
          createdAt?: string
          email?: string | null
          id: string
          name: string
          phone?: string | null
          type?: Database["public"]["Enums"]["ContactType"]
          updatedAt: string
        }
        Update: {
          clubId?: string | null
          createdAt?: string
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          type?: Database["public"]["Enums"]["ContactType"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Contact_clubId_fkey"
            columns: ["clubId"]
            isOneToOne: false
            referencedRelation: "Club"
            referencedColumns: ["id"]
          },
        ]
      }
      Country: {
        Row: {
          createdAt: string
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Deal: {
        Row: {
          clubId: string
          contactId: string
          createdAt: string
          currency: string
          description: string | null
          id: string
          status: Database["public"]["Enums"]["DealStatus"]
          title: string
          updatedAt: string
          value: number
        }
        Insert: {
          clubId: string
          contactId: string
          createdAt?: string
          currency: string
          description?: string | null
          id: string
          status: Database["public"]["Enums"]["DealStatus"]
          title: string
          updatedAt: string
          value: number
        }
        Update: {
          clubId?: string
          contactId?: string
          createdAt?: string
          currency?: string
          description?: string | null
          id?: string
          status?: Database["public"]["Enums"]["DealStatus"]
          title?: string
          updatedAt?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "Deal_clubId_fkey"
            columns: ["clubId"]
            isOneToOne: false
            referencedRelation: "Club"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Deal_contactId_fkey"
            columns: ["contactId"]
            isOneToOne: false
            referencedRelation: "Contact"
            referencedColumns: ["id"]
          },
        ]
      }
      Event: {
        Row: {
          clubId: string | null
          contactId: string | null
          createdAt: string
          description: string | null
          id: string
          type: Database["public"]["Enums"]["EventType"]
          updatedAt: string
        }
        Insert: {
          clubId?: string | null
          contactId?: string | null
          createdAt?: string
          description?: string | null
          id: string
          type: Database["public"]["Enums"]["EventType"]
          updatedAt: string
        }
        Update: {
          clubId?: string | null
          contactId?: string | null
          createdAt?: string
          description?: string | null
          id?: string
          type?: Database["public"]["Enums"]["EventType"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Event_clubId_fkey"
            columns: ["clubId"]
            isOneToOne: false
            referencedRelation: "Club"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Event_contactId_fkey"
            columns: ["contactId"]
            isOneToOne: false
            referencedRelation: "Contact"
            referencedColumns: ["id"]
          },
        ]
      }
      League: {
        Row: {
          countryId: string
          createdAt: string
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          countryId: string
          createdAt?: string
          id: string
          name: string
          updatedAt: string
        }
        Update: {
          countryId?: string
          createdAt?: string
          id?: string
          name?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "League_countryId_fkey"
            columns: ["countryId"]
            isOneToOne: false
            referencedRelation: "Country"
            referencedColumns: ["id"]
          },
        ]
      }
      Note: {
        Row: {
          clubId: string | null
          contactId: string
          content: string
          createdAt: string
          dealId: string | null
          id: string
          updatedAt: string
        }
        Insert: {
          clubId?: string | null
          contactId: string
          content: string
          createdAt?: string
          dealId?: string | null
          id: string
          updatedAt: string
        }
        Update: {
          clubId?: string | null
          contactId?: string
          content?: string
          createdAt?: string
          dealId?: string | null
          id?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Note_clubId_fkey"
            columns: ["clubId"]
            isOneToOne: false
            referencedRelation: "Club"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Note_contactId_fkey"
            columns: ["contactId"]
            isOneToOne: false
            referencedRelation: "Contact"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Note_dealId_fkey"
            columns: ["dealId"]
            isOneToOne: false
            referencedRelation: "Deal"
            referencedColumns: ["id"]
          },
        ]
      }
      Period: {
        Row: {
          countryId: string
          createdAt: string
          end: string
          id: string
          start: string
          updatedAt: string
        }
        Insert: {
          countryId: string
          createdAt?: string
          end: string
          id: string
          start: string
          updatedAt: string
        }
        Update: {
          countryId?: string
          createdAt?: string
          end?: string
          id?: string
          start?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Period_countryId_fkey"
            columns: ["countryId"]
            isOneToOne: false
            referencedRelation: "Country"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ContactType: "PLAYER" | "OTHER"
      DealStatus: "LEAD" | "NEGOTIATION" | "CLOSED_WON" | "CLOSED_LOST"
      EventType: "PLAYER_TRANSFER" | "OTHER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
