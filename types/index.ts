export interface Tool {
  id: string
  name: string
  slug: string
  description: string
  categorySlug: string
  icon?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
}

export interface ResultItem {
  label: string
  value: string | number
  unit?: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
}
