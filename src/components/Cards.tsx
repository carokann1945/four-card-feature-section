import Image from 'next/image';

type Props = {
  title: string;
  content: string;
  src: string;
  accentColor: 'cyan' | 'red' | 'orange' | 'blue';
};

const accentMap = {
  cyan: 'border-cyan',
  red: 'border-red',
  orange: 'border-orange',
  blue: 'border-blue',
};

function Card({ title, content, src, accentColor }: Props) {
  return (
    <div
      className={`min-w-[314px] h-[250px] flex flex-col gap-[32px] items-end p-[32px] rounded-[8px] bg-white border-t-4 ${accentMap[accentColor]} shadow-md`}>
      <div className="w-[250px] min-h-[75px] flex flex-col gap-[6px]">
        <h4 className="text-preset-3 text-grey-500">{title}</h4>
        <p className="text-preset-5 text-grey-400">{content}</p>
      </div>
      <Image src={src} alt={title} width={64} height={64} />
    </div>
  );
}

export default function Cards() {
  return (
    <div className="flex flex-col gap-[32px] md:w-[660px] xl:w-[1114px] md:h-[814px] xl:h-[532px] md:grid md:grid-cols-4 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-4">
      <div className="md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-4">
        <Card
          title="Supervisor"
          content="Monitors activity to identify project roadblocks"
          src="/images/icon-supervisor.svg"
          accentColor="cyan"
        />
      </div>
      <div className="md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-3">
        <Card
          title="Team Builder"
          content="Scans our talent network to create the optimal team for your project"
          src="/images/icon-team-builder.svg"
          accentColor="red"
        />
      </div>
      <div className="md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3 xl:col-start-2 xl:col-end-3 xl:row-start-3 xl:row-end-5">
        <Card
          title="Karma"
          content="Regularly evaluates our talent to ensure quality"
          src="/images/icon-karma.svg"
          accentColor="orange"
        />
      </div>
      <div className="md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4 xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-4">
        <Card
          title="Calculator"
          content="Uses data from past projects to provide better delivery estimates"
          src="/images/icon-calculator.svg"
          accentColor="blue"
        />
      </div>
    </div>
  );
}
