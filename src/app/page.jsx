

import Page from './home/page'; // ปรับตามตำแหน่งของไฟล์ HomePage
import Page2 from './home/page2';
import Page3 from './home/page3';

export default function HomePage() {
  return (
    <div>
      {/* ตัวอย่างการเรียกใช้งาน Component HomePage */}
      <Page />
      <Page2 />
      <Page3 />
      {/* ต่อไปที่ต้องการอื่น ๆ ในหน้า page */}
    </div>
  );
}

