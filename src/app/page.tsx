import Cards from '@/components/Cards';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main>
      <article className="flex flex-col items-center">
        <Title />
        <Cards />
      </article>
    </main>
  );
}
