import type { Location } from "../types/types";

interface BannerProps {
    ip?: string;
    location?: Location;
    isp?: string;
}

function Banner({ip, location, isp}: BannerProps) {
  return (
    <div className='bg-white shadow-2xl rounded-2xl p-3 w-fit absolute absolute top-[160px] left-1/2 transform -translate-x-1/2 text-center sm:text-start sm:flex sm:w-[80%] sm:justify-between sm:top-[200px] sm:gap-2 sm:px-6 z-9999'>
      <div className="my-2">
        <h2 className='text-gray-600 text-sm'>IP Address</h2>
        <p className='font-semibold'>{ip}</p>
      </div>
      <div className="my-2 sm:border-l sm:pl-3 sm:border-gray-400">
        <h2 className='text-gray-600 text-sm'>Location</h2>
        <div>
            <p className='font-semibold'>{location?.city}{location?.region && `, ${location.region}`}</p>
            <p className='font-semibold'>{location?.country} {location?.postalCode && `, ${location.postalCode}`}</p>
        </div>
      </div>
      <div className="my-2 sm:border-l sm:pl-3 sm:border-gray-400">
        <h2 className='text-gray-600 text-sm'>Timezone</h2>
        <p className='font-semibold'>UTC {location?.timezone}</p>
      </div>
      <div className="my-2 sm:border-l sm:pl-3 sm:border-gray-400">
        <h2 className='text-gray-600 text-sm'>ISP</h2>
        <p className='font-semibold'>{isp}</p>
      </div>
    </div>
  );
}

export default Banner;
