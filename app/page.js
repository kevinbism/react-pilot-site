import BoxIntro from '@/components/home/BoxIntro';
import BoxRooms from '@/components/home/BoxRooms';
import BoxRelax from '@/components/home/BoxRelax';
import BoxWedding from '@/components/home/BoxWedding';
import OffersSlider from '@/components/base/OffersSlider';

export default function Home() {
  return (
    <>
      <BoxIntro />
      <BoxRooms />
      <BoxRelax />
      <BoxWedding />
      <OffersSlider />
    </>
  );
}
