import { useSearchParams } from "react-router-dom";

import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

export default function CabinTable() {
  const { isLoading, cabins, errors } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (errors) return <p>Something went wrong...</p>;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  // For Filter
  const filterDiscount = searchParams.get("discount") || "all";
  const filteredCabins = cabins.filter((cabin) => {
    if (filterDiscount === "all") return true;
    if (filterDiscount === "no-discount") return cabin.discount === 0;
    if (filterDiscount === "with-discount") return cabin.discount > 0;
    return true;
  });
  // For SortBy
  const sortBy = searchParams.get("sortBy") || "";
  const [feild, direction] = sortBy.split("-");
  const sortDirection = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[feild] - b[feild]) * sortDirection
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
