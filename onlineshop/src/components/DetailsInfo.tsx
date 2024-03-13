import DetailsInfoHeader from './DetailsInfoHeader';
import { Description } from 'types';
import { Circle, Dot } from 'lucide-react';
import { Dispatch } from 'react';

type DetailsInfoParams = {
  description: Description | undefined;
  type: string | undefined;
  detailsInfoState: number;
  setDetailsInfoState: Dispatch<React.SetStateAction<number>>;
};

const DetailsInfo = ({ description, type, detailsInfoState, setDetailsInfoState }: DetailsInfoParams) => {
  const descriptionText = description?.body.split(' - ');
  const firstSentence = descriptionText?.shift();

  const RenderDetailsInfo = () => {
    if (detailsInfoState === 0) {
      return (
        <div className="flex gap-10">
          <div className="flex flex-col w-1/2">
            <div className="mb-8">{firstSentence}</div>
            {descriptionText?.map((sentence) => <div key={sentence}>- {sentence}</div>)}
          </div>
          <div>
            <div className="mb-3">
              <h3 className="mb-2 font-semibold">Main fabric</h3>
              {description?.fabric_main.map((fabric) => <div key={fabric}>{fabric}</div>)}
            </div>
            <div>
              <h3 className="mb-2 font-semibold">{type === 'pants' ? 'Lining' : 'Sole'}</h3>
              {description?.fabric_other?.map((fabric) => <div key={fabric}>{fabric}</div>)}
            </div>
          </div>
        </div>
      );
    }
    if (detailsInfoState === 1) {
      return (
        <div>
          <ul className="">
            <li className="flex items-center">
              <Dot className="w-12 h-12" />
              Orders with courier delivery or to a selected Parcel Locker:
            </li>
            <li>
              <ul className="">
                <li className="flex items-baseline pl-10">
                  <Circle className="h-2" />
                  placed (and paid - in the case of prepayment) from Monday to Friday until 3:00 PM are delivered to the
                  customer within 48 hours, counting from the day of placing the order.
                </li>
                <li className="flex items-baseline pl-10">
                  <Circle className="h-2" />
                  Orders placed after 3:00 PM, on weekends, or other non-working days are delivered to the customer
                  within two working days from the day of placing the order.
                </li>
              </ul>
            </li>

            <li className="flex items-center">
              <Dot className="w-12 h-12" />
              Orders with delivery to a stationary store:
            </li>

            <ul className="">
              <li className="flex items-baseline pl-10">
                <Circle className="h-2" />
                Orders placed and confirmed by the store for processing before 3:00 PM from Monday to Friday are ready
                for pickup within 24 hours, counting from the day of placing the order.
              </li>
              <li className="flex items-baseline pl-10">
                <Circle className="h-2" />
                Orders placed after 3:00 PM, as well as on non-working days and holidays, are ready for pickup within 48
                hours, counting from the day of placing the order.
              </li>
            </ul>
          </ul>
          <h3 className="mt-4">SHIPPING COST:</h3>
          <ul className="">
            <li className="flex items-center">
              <Dot className="w-12 h-12" />
              For orders below 200 PLN:
            </li>
            <ul className="">
              <li className="flex items-baseline pl-10">
                <Circle className="h-2" />
                Self-pickup at the store - PLN 0.00
              </li>
              <li className="flex items-baseline pl-10">
                <Circle className="h-2" />
                DPD courier - PLN 11.90
              </li>
              <li className="flex items-baseline pl-10">
                <Circle className="h-2" />
                InPost Parcel Lockers - PLN 11.90
              </li>
            </ul>
            <li className="flex items-center">
              <Dot className="w-12 h-12" />
              For orders above 200 PLN, free shipping applies regardless of the chosen delivery method.
            </li>
          </ul>
        </div>
      );
    }
    if (detailsInfoState === 2) {
      return (
        <div className="flex flex-col gap-3">
          <p>30 days for a return. No questions asked!</p>
          <p>
            You can return any product purchased on wearmedicine.com without stating a reason within 30 days from the
            moment of receiving the shipment. For your convenience, we offer several return options. You can also return
            the order at a stationary store (excluding outlets) or at the Krakow pick-up point at Pick Up Point ANSWEAR.
          </p>
          <p>Payment refund may take from 5 to 14 days in accordance with applicable regulations.</p>
        </div>
      );
    }
  };
  return (
    <div className="w-3/5 p-6">
      <DetailsInfoHeader
        detailsInfoState={detailsInfoState}
        setDetailsInfoState={setDetailsInfoState}
      />
      <div>{RenderDetailsInfo()}</div>
    </div>
  );
};

export default DetailsInfo;
