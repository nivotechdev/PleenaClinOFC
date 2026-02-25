import Hero from '@/components/landing-page/hero';
import Space from '@/components/landing-page/space';
import Specialties from '@/components/landing-page/specialties';
import Team from '@/components/landing-page/team';
import Location from '@/components/landing-page/location';
import ClosingCta from '@/components/landing-page/closing-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Space />
      <Specialties />
      <Team />
      <Location />
      <ClosingCta />
    </>
  );
}
