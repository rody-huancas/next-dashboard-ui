import Link from "next/link";
import Image from "next/image";
import React from "react";
/* Components */
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { teachersData } from "@/lib/data";

type Teacher = {
  id       : number;
  teacherId: string;
  name     : string;
  email?   : string;
  photo    : string;
  phone    : string;
  subjects : string[];
  classes  : string[];
  address  : string;
};

const columns = [
  {
    header: "Información",
    accessor: "info",
  },
  {
    header: "ID del Profesor",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Materias",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Clases",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Teléfono",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Dirección",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Acciones",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Todos los profesores
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
