import React from "react";

import { useGetQuestionsBySearchQuery } from "@/store/services/stackOverFlowApi";
import { useAppSelector } from "@/hooks/toolkitHook";
import Table from "../table";
import Loader from "../loader";
import ErrorUi from "../errorUi";
import Search from "../search";
import SortBlock from "../sortBlock";

const LandingPage = () => {

  const {searchTerm, sortTerm, sortBy} = useAppSelector(state => state.main)

  const { data, error, isLoading, isFetching } =
    useGetQuestionsBySearchQuery({searchTerm, sortTerm, sortBy});

  return (
    <div>
      <Search />
      <SortBlock />
      {error ? (
        <ErrorUi />
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <Table data={data} />
      ) : null}
    </div>
  );
};

export default LandingPage;
