"use client"
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function PrincipalUsers() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      setError('No token or user data found');
      setLoading(false);
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch (err) {
      setError('Error parsing user data');
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">VOO</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>{user ? user.name[0] : 'U'}</AvatarFallback>
            </Avatar>
            <div>{user ? user.name : 'Loading...'}</div>
          </div>
          <Button variant="ghost" size="icon">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <SettingsIcon className="w-5 h-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="w-4 h-4" />
                    <span>Personal Information</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="w-4 h-4" />
                    <span>Security</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4" />
                    <span>Dark Mode</span>
                  </div>
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </header>
      <nav className="bg-background border-b">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Tabs defaultValue="reports">
            <TabsList>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="live-map">Live Map</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Tabs>
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>View and manage your bus reports.</CardDescription>
              </CardHeader>
              <CardContent>
                <div>This is the Reports section.</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
                <CardDescription>Get help with your bus app issues.</CardDescription>
              </CardHeader>
              <CardContent>
                <div>This is the Support section.</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="live-map">
            <Card>
              <CardHeader>
                <CardTitle>Live Map</CardTitle>
                <CardDescription>Track your buses in real-time.</CardDescription>
              </CardHeader>
              <CardContent>
                <div>This is the Live Map section.</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>Manage your bus app users.</CardDescription>
              </CardHeader>
              <CardContent>
                <div>This is the Users section.</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  


  );
}

function SettingsIcon(props) {
  return (
    <svg
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
