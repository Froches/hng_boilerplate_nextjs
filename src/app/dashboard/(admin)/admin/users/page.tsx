"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Filter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import CardComponent from "~/components/adminDashboard/CardComponent";
import CustomButton from "~/components/common/common-button/common-button";
import { Button } from "~/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "~/components/ui/pagination";
import DropdownMenu from "../../_components/ui/dropdownMenu";
import UserTable from "./component/userTable";
import { userCardData } from "./data/user-dummy-data";

import "./assets/style.css";

interface FilterDataProperties {
  title: string;
  selected: boolean;
}

const filterData: FilterDataProperties[] = [
  {
    title: "Active",
    selected: false,
  },

  {
    title: "Inactive",
    selected: false,
  },
];

const UserPage = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<
    FilterDataProperties | undefined
  >();

  const menuReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        menuReference.current &&
        !menuReference.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <section>
        <div className="mb-6 mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {userCardData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              value={card.value.toLocaleString()}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="mr-auto">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
                Users
              </h3>
              <h5 className="whitespace-nowrap text-base font-normal leading-4 text-neutral-dark-2">
                Manage Users & Track Activity
              </h5>
            </div>

            <div className="flex flex-row items-center gap-3">
              <div className="relative" ref={menuReference}>
                <CustomButton
                  onClick={() => setShowDropdown(!showDropdown)}
                  size="lg"
                  className="p-3"
                  variant="outline"
                >
                  <div className="flex flex-row items-center gap-2">
                    <Filter size={16} color="#525252" />
                    <div className="text-base font-normal leading-5">
                      Filter
                    </div>
                  </div>
                </CustomButton>

                <DropdownMenu width="w-[150px]" active={showDropdown}>
                  {filterData.map((data, index) => {
                    const { selected, title } = data;

                    selectedFilter?.title === title
                      ? (data.selected = true)
                      : (data.selected = false);

                    return (
                      <button
                        onClick={() => setSelectedFilter(filterData[index])}
                        key={index}
                        className="flex w-full items-center gap-2 px-2 py-1.5 text-left text-base font-normal leading-4 text-foreground outline-none"
                      >
                        <div className="mr-auto">{title}</div>
                        <Check
                          size={16}
                          color="#09090b"
                          className={`${selected ? "opacity-100" : "opacity-0"}`}
                        />
                      </button>
                    );
                  })}
                </DropdownMenu>
              </div>

              <CustomButton size="lg" className="p-3" variant="primary">
                <div className="flex flex-row items-center gap-2">
                  <CirclePlus size={16} color="#FFFFFF" />
                  <div className="text-base font-normal leading-5">
                    Add new user
                  </div>
                </div>
              </CustomButton>
            </div>
          </div>

          <div className="user-table mt-6 h-full w-full overflow-x-auto overflow-y-visible">
            <UserTable />
          </div>

          <div className="mt-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <Button variant={"ghost"}>
                    <ChevronLeft /> Previous
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className="bg-transparent shadow-none"
                    href="#"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive={true}>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className="bg-transparent shadow-none"
                    href="#"
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <Button variant={"ghost"}>
                    Next <ChevronRight />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserPage;
