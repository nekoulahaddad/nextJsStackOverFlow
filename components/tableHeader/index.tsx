import React from "react";
import { HEADERS } from "./consts";
import { HeaderElement } from "./styles";

const TableHeader = React.memo(function TableHeader() {
  return (
    <tr>
      {HEADERS.map(header => <HeaderElement key={header}>{header}</HeaderElement>)}
    </tr>
  );
});

export default TableHeader;
