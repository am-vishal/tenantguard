import { useEffect, useState } from 'react';
import Loader from '../components/shared/Loader';
import HeroSection from '../components/sections/HeroSection';
import WelcomeSection from '../components/sections/WelcomeSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import CTASection from '../components/sections/CTASection';
import ContactSection from '../components/sections/ContactSection';
import TenantBackgroundSection from '../components/tenant/TenantBackgroundSection';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem('tenantguard');
      if (stored) {
        try {
          const user = JSON.parse(stored);
          if (user.role === 'admin') {
            setIsLoggedIn(true);
          } else {
            setIsSignedUp(true);
          }
        } catch (err) {
          console.error('Error parsing tenantguard data:', err);
        }
      }

      setLoading(false);
    };

    setTimeout(checkAuth, 300);
  }, []);

  if (loading) return <Loader isAnimationLoader={true} />;

  return (
    <main className="min-h-screen">
      {!isLoggedIn ?
        <HeroSection
          isLoggedIn={isLoggedIn}
          isSignedUp={isSignedUp}
          setAuthType={setAuthType}
          setShowAuthModal={setShowAuthModal}
          authType={authType}
          showAuthModal={showAuthModal}
        />
        :
        <WelcomeSection />
      }
      <FeaturesSection />
      <TenantBackgroundSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <CTASection onSignUp={() => {
        setAuthType('signup');
        setShowAuthModal(true);
      }} />
      <ContactSection />
    </main>
  );
};

export default Home;
