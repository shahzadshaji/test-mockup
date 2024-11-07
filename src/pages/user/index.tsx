"use client"
import { Layout } from "@/components/Layout";
import {
  TableWrapper,
  Table,
  THead,
  Tr,
  Th,
  TBody,
  Td,
} from "@/components/Table";

const UserRoute = () => {
  return (
    <>
      <Layout />
      <div className="flex flex-col md:pl-64">
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 md:px-8">
              <div className="mt-8">
                <TableWrapper>
                  <Table>
                    <THead>
                      <Tr>
                        <Th>ID</Th>
                        <Th sort="name">Name</Th>
                        <Th>E-mail</Th>
                        <Th sort="created_at">Created Date</Th>
                        <Th sort="updated_at">Updated Date</Th>
                      </Tr>
                    </THead>
                    <TBody>
                      <Tr>
                        <Td>{"1"}</Td>
                        <Td className="font-medium">
                          <p>{"Example"}</p>
                        </Td>
                        <Td>
                          <p>{"example@mail.com"}</p>
                        </Td>
                        <Td>
                          <p>{"7-Nov-2024"}</p>
                        </Td>
                        <Td>
                          <p>{"7-Nov-2024"}</p>
                        </Td>
                      </Tr>
                    </TBody>
                  </Table>
                </TableWrapper>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserRoute;
