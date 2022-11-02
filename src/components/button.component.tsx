type Props = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: Props) {
  return <button className="p-2 border rounded-md bg-blue-400" {...props} />;
}
