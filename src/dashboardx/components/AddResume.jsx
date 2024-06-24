import { v4 as uuid4 } from "uuid";
import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import GlobalApi from "./../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddResume = () => {
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState('');
    const { user } = useUser();

    const onCreate = async () => {
        if (!resumeTitle) {
            alert("Please enter a title for your resume.");
            return;
        }

        setLoading(true);
        const uuid = uuid4();
        const data = {
            title: resumeTitle,
            resumeid: uuid,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
        };

        try {
            const res = await GlobalApi.CreateNewResume(data);
            console.log("Resume created successfully:", res);
            setLoading(false);
            setOpenDialog(false); // Close dialog after successful creation
            // Optionally: Show success message or navigate to a new page
        } catch (error) {
            console.error("Error creating resume:", error);
            setLoading(false);
            // Optionally: Handle specific error cases and show error message to user
        }
    };

    return (
        <div>
            <div
                onClick={() => setOpenDialog(true)}
                className="p-14 py-24 items-center flex justify-center bg-secondary rounded-lg mt-10 h-[290px] hover:scale-90 transition-all hover:shadow-xl cursor-pointer border-2 border-red-500"
            >
                <PlusSquare />
            </div>

            <Dialog open={openDialog}>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            <p>Add Title For your New Resume</p>
                            <Input
                                className="my-2"
                                placeholder="Ex. AI Developer Resume"
                                value={resumeTitle}
                                onChange={(e) => setResumeTitle(e.target.value)}
                            />
                        </DialogDescription>
                        <div className="flex justify-end gap-5">
                            <Button onClick={() => setOpenDialog(false)} variant="ghost">
                                Cancel
                            </Button>
                            <Button
                                disabled={!resumeTitle || loading}
                                onClick={() => onCreate()}
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin h-4 w-4" />
                                ) : (
                                    "Create"
                                )}
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddResume;
