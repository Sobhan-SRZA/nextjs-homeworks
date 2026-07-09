import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";

interface CreateJobApplicationDialogProbs {
    columnId: string;
    boardId: string;
}

export default function CreateJobApplicationDialog({ boardId, columnId }: CreateJobApplicationDialogProbs) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant={"outline"}
                    className={"w-full mb-4 justify-start text-muted-foreground border-dashed border-2 hover:border-solid hover:bg-muted/50"}
                >
                    <Plus className="size-4 mr-2" />
                    Add Job
                </Button>
            </DialogTrigger>

            <DialogContent className={"maxw-2xl"}>
                <DialogHeader>
                    <DialogTitle>
                        Add Job Application
                    </DialogTitle>

                    <DialogDescription>
                        Track new job applications
                    </DialogDescription>
                </DialogHeader>

                <form className="space-y-4">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="company">
                                    Company *
                                </Label>

                                <Input
                                    id="company"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="position">
                                    Position *
                                </Label>

                                <Input
                                    id="position"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="location">
                                    Location
                                </Label>

                                <Input
                                    id="location"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="salary">
                                    Salary
                                </Label>

                                <Input
                                    id="salary"
                                    required
                                    placeholder="e.g., $100 - $150"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
