"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "./ui/dropdown-menu";
import {
    Edit2,
    ExternalLink,
    MoreVertical,
    Trash2
} from "lucide-react";
import {
    Column,
    JobApplication
} from "@/lib/models/models.types"
import {
    Card,
    CardContent
} from "./ui/card";
import { Button } from "./ui/button";

interface JobApplicationCardProbs {
    job: JobApplication;
    columns: Column[]
}

export default function JobApplicationCard({ columns, job }: JobApplicationCardProbs) {
    return (
        <>
            <Card
                className="cursor-pointer transition-shadow hover:shadow-lg bg-white group shadow-sm"
            >
                <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-1">{job.position}</h3>
                            <p className="text-xs text-muted-foreground mb-2">
                                {job.company}
                            </p>

                            {job.description && (
                                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                                    {job.description}
                                </p>
                            )}

                            {job.tags && job.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mb-2">
                                    {job.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {job.jobURL && (
                                <a
                                    target="_blank"
                                    href={job.jobURL.startsWith("http") ? `${job.jobURL}` : `https://${job.jobURL}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                                >
                                    <ExternalLink />
                                </a>
                            )}
                        </div>

                        <div className="flex items-start gap-1">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-6"
                                    >
                                        <MoreVertical />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Edit2 className="mr-2 size-4" />
                                            Edit
                                        </DropdownMenuItem>

                                        {columns.length > 1 && (
                                            <>
                                                {columns.filter(a => a._id !== job.columnId).map((column, index) => (
                                                    <DropdownMenuItem key={index}
                                                    >
                                                        Move to {column.name}
                                                    </DropdownMenuItem>
                                                ))}
                                            </>
                                        )}

                                        <DropdownMenuItem
                                            className="text-destructive"
                                        >
                                            <Trash2 className="mr-2 size-4" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
