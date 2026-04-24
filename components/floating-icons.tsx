"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  Laptop,
  Briefcase,
  Mail,
  User,
  Star,
  MessageSquare,
  Search,
  Award,
  Zap,
  CheckCircle,
  Target,
  TrendingUp,
  Clock,
  Shield,
  Bookmark,
  Send,
  Globe,
  Code,
  Database,
  Layers,
  PenTool,
  Camera,
  Music,
  Heart,
  ThumbsUp,
  Coffee,
  Headphones,
  Smartphone,
  Monitor,
  Wifi,
  Cloud,
  Settings,
  Bell,
  Calendar,
  Rocket,
  Compass,
  MapPin,
  Flag,
  Trophy,
  Crown,
  Diamond,
  Gem,
  Gift,
  Package,
  ShoppingBag,
  CreditCard,
  Wallet,
  PiggyBank,
  BarChart,
  PieChart,
  Activity,
  LineChart,
  Gauge,
  Cpu,
  HardDrive,
  Server,
  Terminal,
  GitBranch,
  Github,
  Gitlab,
  Box,
  Boxes,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileCode,
  FileJson,
  FilePlus,
  Clipboard,
  ClipboardCheck,
  ListTodo,
  CheckSquare,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Sparkles,
  Flame,
  Snowflake,
  Sun,
  Moon,
  CloudRain,
  Wind,
  Umbrella,
  Rainbow,
  Lightbulb,
  BatteryCharging,
  Plug,
  Power,
  ToggleLeft,
  Sliders,
  Volume2,
  Mic,
  Radio,
  Tv,
  Film,
  Video,
  Image,
  Palette,
  Brush,
  Eraser,
  Scissors,
  Ruler,
  Pencil,
  Edit3,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Hash,
  AtSign,
  Link,
  ExternalLink,
  Share2,
  Download,
  Upload,
  RefreshCw,
  RotateCcw,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  Tag,
  Tags,
  Filter,
  SortAsc,
  SortDesc,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  ChevronsUp,
  ChevronsDown,
  Move,
  Navigation,
  Navigation2,
  Crosshair,
  MousePointer,
  Hand,
  Grab,
  PointerOff,
  Users,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Contact,
  Building,
  Building2,
  Home,
  Store,
  Factory,
  Warehouse,
  School,
  GraduationCap,
  BookOpen,
  Library,
  Newspaper,
  Rss,
  Podcast,
  Voicemail,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  MessageCircle,
  MessagesSquare,
  Inbox,
  MailOpen,
  Mailbox,
  Forward,
  Reply,
  ReplyAll,
  Trash2,
  FolderX,
  Ban,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  LifeBuoy,
  Anchor,
  Ship,
  Plane,
  Car,
  Bus,
  Train,
  Bike,
  Truck,
} from "lucide-react"

interface FloatingIcon {
  id: number
  Icon: React.ElementType
  x: number
  y: number
  size: number
  rotation: number
  velocityX: number
  velocityY: number
  rotationSpeed: number
}

export function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const animationRef = useRef<number | null>(null)

  const iconComponents = [
    FileText,
    Laptop,
    Briefcase,
    Mail,
    User,
    Star,
    MessageSquare,
    Search,
    Award,
    Zap,
    CheckCircle,
    Target,
    TrendingUp,
    Clock,
    Shield,
    Bookmark,
    Send,
    Globe,
    Code,
    Database,
    Layers,
    PenTool,
    Camera,
    Music,
    Heart,
    ThumbsUp,
    Coffee,
    Headphones,
    Smartphone,
    Monitor,
    Wifi,
    Cloud,
    Settings,
    Bell,
    Calendar,
    Rocket,
    Compass,
    MapPin,
    Flag,
    Trophy,
    Crown,
    Diamond,
    Gem,
    Gift,
    Package,
    ShoppingBag,
    CreditCard,
    Wallet,
    PiggyBank,
    BarChart,
    PieChart,
    Activity,
    LineChart,
    Gauge,
    Cpu,
    HardDrive,
    Server,
    Terminal,
    GitBranch,
    Github,
    Gitlab,
    Box,
    Boxes,
    Archive,
    Folder,
    FolderOpen,
    File,
    FileCode,
    FileJson,
    FilePlus,
    Clipboard,
    ClipboardCheck,
    ListTodo,
    CheckSquare,
    Square,
    Circle,
    Triangle,
    Hexagon,
    Octagon,
    Pentagon,
    Sparkles,
    Flame,
    Snowflake,
    Sun,
    Moon,
    CloudRain,
    Wind,
    Umbrella,
    Rainbow,
    Lightbulb,
    BatteryCharging,
    Plug,
    Power,
    ToggleLeft,
    Sliders,
    Volume2,
    Mic,
    Radio,
    Tv,
    Film,
    Video,
    Image,
    Palette,
    Brush,
    Eraser,
    Scissors,
    Ruler,
    Pencil,
    Edit3,
    Type,
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    List,
    Hash,
    AtSign,
    Link,
    ExternalLink,
    Share2,
    Download,
    Upload,
    RefreshCw,
    RotateCcw,
    Maximize,
    Minimize,
    ZoomIn,
    ZoomOut,
    Eye,
    EyeOff,
    Lock,
    Unlock,
    Key,
    Fingerprint,
    Scan,
    QrCode,
    Barcode,
    Tag,
    Tags,
    Filter,
    SortAsc,
    SortDesc,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ChevronUp,
    ChevronDown,
    ChevronsUp,
    ChevronsDown,
    Move,
    Navigation,
    Navigation2,
    Crosshair,
    MousePointer,
    Hand,
    Grab,
    PointerOff,
    Users,
    UserPlus,
    UserMinus,
    UserCheck,
    UserX,
    Contact,
    Building,
    Building2,
    Home,
    Store,
    Factory,
    Warehouse,
    School,
    GraduationCap,
    BookOpen,
    Library,
    Newspaper,
    Rss,
    Podcast,
    Voicemail,
    Phone,
    PhoneCall,
    PhoneIncoming,
    PhoneOutgoing,
    MessageCircle,
    MessagesSquare,
    Inbox,
    MailOpen,
    Mailbox,
    Forward,
    Reply,
    ReplyAll,
    Trash2,
    FolderX,
    Ban,
    XCircle,
    AlertCircle,
    AlertTriangle,
    Info,
    HelpCircle,
    LifeBuoy,
    Anchor,
    Ship,
    Plane,
    Car,
    Bus,
    Train,
    Bike,
    Truck,
  ]

  useEffect(() => {
    const initialIcons: FloatingIcon[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      Icon: iconComponents[i % iconComponents.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 16,
      rotation: Math.random() * 360,
      velocityX: (Math.random() - 0.5) * 0.15,
      velocityY: (Math.random() - 0.5) * 0.15,
      rotationSpeed: (Math.random() - 0.5) * 0.3,
    }))
    setIcons(initialIcons)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let { x, y, velocityX, velocityY, rotation, rotationSpeed } = icon

          // Calculate distance from mouse
          const dx = mousePos.x - x
          const dy = mousePos.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Repel from mouse if close
          if (distance < 15 && distance > 0) {
            const force = (15 - distance) / 15
            velocityX -= (dx / distance) * force * 0.5
            velocityY -= (dy / distance) * force * 0.5
          }

          // Apply velocity with damping
          velocityX *= 0.98
          velocityY *= 0.98

          // Add small random drift
          velocityX += (Math.random() - 0.5) * 0.02
          velocityY += (Math.random() - 0.5) * 0.02

          // Clamp velocity
          const maxVel = 0.4
          velocityX = Math.max(-maxVel, Math.min(maxVel, velocityX))
          velocityY = Math.max(-maxVel, Math.min(maxVel, velocityY))

          // Update position
          x += velocityX
          y += velocityY
          rotation += rotationSpeed

          // Wrap around edges
          if (x < -5) x = 105
          if (x > 105) x = -5
          if (y < -5) y = 105
          if (y > 105) y = -5

          return { ...icon, x, y, velocityX, velocityY, rotation }
        })
      )
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePos])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.rotation}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: icon.id * 0.05 }}
        >
          <icon.Icon
            size={icon.size}
            className="text-primary/20 stroke-[1.5]"
            style={{
              filter: "drop-shadow(0 0 4px oklch(0.6 0.22 250 / 0.3))",
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
