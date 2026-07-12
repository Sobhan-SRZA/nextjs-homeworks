"use client"

import {
  Award,
  Calendar,
  CheckCircle2,
  Mic,
  MoreHorizontal,
  Trash2,
  XCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "./ui/card";
import {
  Board,
  Column,
  JobApplication
} from "@/lib/models/models.types";
import { useBoard } from "@/lib/hooks/useBoards";
import { Button } from "./ui/button";
import CreateJobApplicationDialog from "./create-job-dialog";
import JobApplicationCard from "./job-application-card";

interface KanbanBoardProbs {
  board: Board;
  userId: string;
}

interface ColumnConfig {
  color: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<ColumnConfig> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="size-4" />
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="size-4" />
  },
  {
    color: "bg-green-500",
    icon: <Mic className="size-4" />
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="size-4" />
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="size-4" />
  }
];

interface DroppableColumnProbs {
  column: Column;
  config: ColumnConfig;
  boardId: string;
  sortedColumns: Column[];
}

function DroppableColumn({
  column,
  config,
  boardId,
  sortedColumns
}: DroppableColumnProbs) {
  const sortedJobs = column.jobApplications.sort((a, b) => a.order - b.order) || [];

  return (
    <Card className="min-w-75 shrink-0 shadow-md p-0">
      <CardHeader className={`${config.color} text-white rounded-t-lg py-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {config.icon}
            <CardTitle className="text-white text-base font-semibold">
              {column.name}
            </CardTitle>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant={"ghost"}
                size={"icon"}
                className={"size-6 text-white hover:bg-white/20"}
              >
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem className={"text-destructive"}>
                <Trash2 className="size-4 mr-2" />
                Delete Column
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </CardHeader>

      <CardContent className="space-y-2 pt-2 bg-gray-50/50 min-h-100 rounded-b-lg">
        {sortedJobs.map((job, index) => {
          return (
            <SortableJobCard
              key={index}
              job={{ ...job, columnId: job.columnId || column._id }}
              columns={sortedColumns}
            />
          )
        })}

        <CreateJobApplicationDialog
          boardId={boardId}
          columnId={column._id}
        />
      </CardContent>
    </Card>
  )
}

interface SortableJobCardProbs {
  job: JobApplication,
  columns: Column[]
}

function SortableJobCard({ columns, job }: SortableJobCardProbs) {
  return (
    <div>
      <JobApplicationCard
        columns={columns}
        job={job}
      />
    </div>
  )
}

export default function KanbanBoard({ board, userId }: KanbanBoardProbs) {

  const { columns, moveJob } = useBoard(board);

  const sortedColumns = columns.sort((a, b) => a.order - b.order) || [];

  return (
    <>
      <div>
        <div>
          {
            columns.map((column, index) => {
              const config = COLUMN_CONFIG[index] || {
                color: "bg-gray-500",
                icon: <Calendar className="size-4" />
              };

              return (
                <DroppableColumn
                  key={index}
                  column={column}
                  config={config}
                  boardId={board._id}
                  sortedColumns={sortedColumns}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
