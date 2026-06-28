import { Form } from "react-bootstrap";

const ShopSelect = ({ controlId, label, value, options, onChange }) => {
  return (
    <Form.Group className="shop-control" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};
export default ShopSelect;
