import Button from "../Button/Button";

function FeedbackOptions({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <div>
      <Button text="Good" type="button" handleClick={onGoodClick} />
      <Button text="Neutral" type="button" handleClick={onNeutralClick} />
      <Button text="Bad" type="button" handleClick={onBadClick} />
    </div>
  );
}
export default FeedbackOptions;
