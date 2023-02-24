import { IQuestionData, IQuestionItem } from '@/types/main';
import { useRouter } from 'next/router'
import React from "react";
import TableHeader from "../tableHeader";
import { RowElement, TagElement } from "./styles";

const Table = ({ data }: { data: IQuestionData }) => {
  const router = useRouter()

  const handleChooseQuestion = (question_id:string) => {
    router.push(`/${question_id}`)
  }

  return (
    <table>
      <tbody>
        <TableHeader />
        {data.items.map((item: IQuestionItem) => (
          <RowElement onClick={() => handleChooseQuestion(item.question_id)} key={item.question_id}>
            <th>{item.owner.display_name}</th>
            <th>{item.title}</th>
            <th>{item.answer_count}</th>
            <th>
              {item.tags.map((tag:string) => <TagElement key={tag}>{tag}</TagElement>)}
            </th>
          </RowElement>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

