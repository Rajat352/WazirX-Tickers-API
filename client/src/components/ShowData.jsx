export default function ShowData(props) {
  const { id, name, last, buy, sell, volume, base_unit } = props;
  return (
    <tr key={id} className="bg-secondary py-5 text-white">
      <td className="p-3 text-primary">{name}</td>
      <td className="py-1 px-3">&#8377; {last}</td>
      <td>&#8377; {buy}</td>
      <td>&#8377; {sell}</td>
      <td>{volume}</td>
      <td>{base_unit}</td>
    </tr>
  );
}
