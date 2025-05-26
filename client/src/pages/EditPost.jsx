import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useEffect, useState } from "react";

function EditPost({ id }) {
  const [news, setNews] = useState({});
  const fetchNews = async (e) => {
    const res = await axios.get(`http://localhost:5000/news/${id}`);
    const x = res.data;
    setNews(x);
  };
  useEffect(() => {
    if (id) fetchNews();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image_link.value;
    const description = form.description.value;
    const data = { title, image, description };
    const res = await axios.put(`http://localhost:5000/news/${id}`, data);
    const d = res.data;
    console.log(d);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className={"cursor-pointer"}>Edit Post</Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Card className="mx-auto w-full max-w-full border-0 shadow-none">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">
                  Add a new post
                </CardTitle>
                <CardDescription>
                  Enter your email and password to login to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      type="title"
                      defaultValue={news?.title}
                      placeholder="Hello World"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image_link">Image Link</Label>
                    <Input
                      id="image_link"
                      type="url"
                      defaultValue={news?.image}
                      placeholder="https://example.com/image.png"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      type="description"
                      defaultValue={news?.description}
                      placeholder="Enter Blog Description"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full cursor-pointer">
                    Add New Post
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditPost;
