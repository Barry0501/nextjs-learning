"use client";

import { useFetchUsers } from "@/hooks/userHooks";
import {
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "phone",
    label: "PHONE",
  },
  {
    key: "gender",
    label: "GENDER",
  },
  {
    key: "location",
    label: "LOCATION",
  },
];

const Page = () => {
  const [page, setPage] = React.useState(1);
  const { isLoading, data } = useFetchUsers(page);

  const loadingState =
    isLoading || data?.results.length === 0 ? "loading" : "idle";

  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <Table
        classNames={{
          wrapper: "h-[700px] w-[1200px] m-auto",
        }}
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={10}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={data?.results ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(user) => (
            <TableRow key={user.login.uuid}>
              <TableCell>{user.id.value ?? "-"}</TableCell>
              <TableCell>
                {user.name.first} {user.name.last}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>
                {user.location.city},{user.location.country}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
