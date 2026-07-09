"use clinet";

import {
  Award,
  Calendar,
  CheckCircle2,
  Mic,
  MoreHorizontal,
  XCircle
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle
} from "./ui/card";
import {
  Board,
  Column
} from "@/lib/models/models.types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

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
    icon: <Calendar className="h-4 w-4" />
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="h-4 w-4" />
  },
  {
    color: "bg-green-500",
    icon: <Mic className="h-4 w-4" />
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="h-4 w-4" />
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="h-4 w-4" />
  }
];

interface DroppableColumnProbs {
  column: Column;
  config: ColumnConfig;
  boardId: string;
}

function DroppableColumn({ column, config, boardId }: DroppableColumnProbs) {
  return (
    <Card>
      <CardHeader className={`${config.color}`}>
        <div>
          <div>
            {config.icon}
            <CardTitle>
              {column.name}
            </CardTitle>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuGroup>

              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </CardHeader>
    </Card>
  )
}


export default function KanbanBoard({ board, userId }: KanbanBoardProbs) {
  const columns = board.columns;

  return (
    <>
      <div>
        <div>
          {
            columns.map((column, index) => {
              const config = COLUMN_CONFIG[index] || {
                color: "bg-gray-500",
                icon: <Calendar className="h-4 w-4" />
              };

              return (
                <DroppableColumn
                  key={index}
                  column={column}
                  config={config}
                  boardId={board._id}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
