
import { useRouter } from "next/router";

import ErrorUi from "@/components/errorUi";
import Loader from "@/components/loader";
import QuestionDetails from "@/components/questionDetails";
import { useGetQuestionByIdQuery } from "@/store/services/stackOverFlowApi";

export default function NotePage() {
  const router = useRouter()
  const questionId = router.query.questionId
    
  const { data, error, isLoading, isFetching } = useGetQuestionByIdQuery(questionId);

      return (
        <div>
        {error ? (
          <ErrorUi />
        ) : isLoading ? (
          <Loader />
        ) : data ? (
          <QuestionDetails data={data} />
        ) : null}
      </div>
      );
    }