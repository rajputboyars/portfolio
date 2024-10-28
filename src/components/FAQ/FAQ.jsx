import FAQ_DATA from '@/constants/faq.constant';
import FaqItem from './FAQItem';

const FAQ = () => {
  return (
    <div className="text-white shadow-white mx-auto p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {FAQ_DATA.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export { FAQ};
