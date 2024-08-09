
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Pagination } from "@/components/ui/pagination"

export function Tablas() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ key: "name", order: "asc" })
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [filterType, setFilterType] = useState("all")
  const users = useMemo(() => {
    return [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "User",
        status: "Active",
        type: "user",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "User",
        status: "Active",
        type: "user",
      },
      {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        role: "Driver",
        status: "Active",
        type: "driver",
      },
      {
        id: 4,
        name: "Sarah Lee",
        email: "sarah@example.com",
        role: "Driver",
        status: "Inactive",
        type: "driver",
      },
      {
        id: 5,
        name: "Michael Brown",
        email: "michael@example.com",
        role: "User",
        status: "Active",
        type: "user",
      },
      {
        id: 6,
        name: "Emily Davis",
        email: "emily@example.com",
        role: "Driver",
        status: "Active",
        type: "driver",
      },
      {
        id: 7,
        name: "David Wilson",
        email: "david@example.com",
        role: "User",
        status: "Inactive",
        type: "user",
      },
      {
        id: 8,
        name: "Jessica Thompson",
        email: "jessica@example.com",
        role: "Driver",
        status: "Active",
        type: "driver",
      },
      {
        id: 9,
        name: "William Anderson",
        email: "william@example.com",
        role: "User",
        status: "Active",
        type: "user",
      },
      {
        id: 10,
        name: "Olivia Martinez",
        email: "olivia@example.com",
        role: "Driver",
        status: "Inactive",
        type: "driver",
      },
    ]
      .filter((user) => {
        const searchValue = search.toLowerCase()
        if (filterType === "all") {
          return (user.name.toLowerCase().includes(searchValue) ||
          user.email.toLowerCase().includes(searchValue) ||
          user.role.toLowerCase().includes(searchValue) || user.status.toLowerCase().includes(searchValue));
        } else {
          return user.type === filterType
        }
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1
        }
      })
      .slice((page - 1) * pageSize, page * pageSize);
  }, [search, sort, page, pageSize, filterType])
  const handleSearch = (e) => setSearch(e.target.value)
  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" })
    } else {
      setSort({ key, order: "asc" })
    }
  }
  const handlePageChange = (page) => setPage(page)
  const handlePageSizeChange = (size) => setPageSize(size)
  const handleFilterType = (type) => setFilterType(type)
  const handleExport = () => {
    console.log("Exporting data...")
  }
  const handleUserDetails = (user) => {
    console.log("Showing details for user:", user)
  }
  return (
    (<div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Input
          type="search"
          placeholder="Search users or drivers..."
          value={search}
          onChange={handleSearch}
          className="flex-1" />
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleFilterType("all")}
            className={`flex items-center gap-2 ${filterType === "all" ? "font-medium" : ""}`}>
            All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleFilterType("user")}
            className={`flex items-center gap-2 ${filterType === "user" ? "font-medium" : ""}`}>
            Users
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleFilterType("driver")}
            className={`flex items-center gap-2 ${filterType === "driver" ? "font-medium" : ""}`}>
            Drivers
          </Button>
          <Button size="sm" className="ml-auto">
            Add User
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            className="flex items-center gap-2">
            <DownloadIcon className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "Active" ? "success" : "danger"}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <FilePenIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`${user.status === "Inactive" ? "text-success" : "text-danger"}`}>
                      <UserCheckIcon className="h-4 w-4" />
                      <span className="sr-only">{user.status === "Inactive" ? "Activate" : "Deactivate"}</span>
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleUserDetails(user)}>
                      <InfoIcon className="h-4 w-4" />
                      <span className="sr-only">User Details</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <Select
            value={pageSize}
            onValueChange={(e) => handlePageSizeChange(Number(e.target.value))}>
            <SelectTrigger>
              <SelectValue>{pageSize}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={10}>10</SelectItem>
              <SelectItem value={25}>25</SelectItem>
              <SelectItem value={50}>50</SelectItem>
            </SelectContent>
          </Select>
          <span>entries</span>
        </div>
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(users.length / pageSize)}
          onPageChange={handlePageChange}
          className="mt-4 md:mt-0" />
      </div>
    </div>)
  );
}

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}


function DownloadIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>)
  );
}


function FilePenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>)
  );
}


function InfoIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>)
  );
}


function UserCheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
