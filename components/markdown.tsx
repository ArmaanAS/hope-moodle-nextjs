interface Props {
  html: string;
}

export default function Markdown({ html }: Props) {
  return (
    <article className="prose prose-sm xl:prose-base prose-gray dark:prose-dark max-w-2xl xl:max-w-4xl" dangerouslySetInnerHTML={{ __html: html }}></article>
  );
}