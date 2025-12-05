import { useEffect, useState } from "react";
import { getQuestao } from "../services/questoesService";
import Container from "../components/Container";
import TestContainer from "../components/TestContainer";

type Question = {
  subject: string;
  number: number;
  text: string;
  alternatives: string[];
  correct?: number;
}

export default function Test() {
  const [testData, setTestData] = useState<Question>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await getQuestao(2);
        setTestData(response);
      } catch (err) {
        console.error("Erro ao carregar questões:", err);
      } finally {
        setLoading(false);
      }
	  
    }

    load();
  }, []);

  console.log(testData);


  if (loading) {
    return (
      <Container className="w-full h-[calc(100vh-52px)] flex items-center justify-center">
        <p>Carregando...</p>
      </Container>
    );
  }


  const q = testData;
  console.log(q);

  if (!q) {
    return (
      <Container className="w-full h-[calc(100vh-52px)] flex items-center justify-center">
        <p>Nenhuma questão encontrada.</p>
      </Container>
    );
  }

  return (
    <Container className="w-full h-[calc(100vh-52px)] items-center justify-center bg-[#f6f7f9]">
      <TestContainer
        subject={q.subject}
        number={q.number}
        text={q.text}
        alternatives={q.alternatives}
		correct={q.correct}
      />
    </Container>
  );
}
