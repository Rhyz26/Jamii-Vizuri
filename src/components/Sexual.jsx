import React from 'react'
import { Image } from '@mantine/core'

export default function Sexual() {
  return (
    <div><div className="font-serif mx-auto max-w-[90%] text-xl">
      <h1 className="text-center font-bold pb-4 text-3xl pt-4">
        Taking Charge of Your Sexual & Reproductive Health in Kampala
      </h1>

      <p>
        Here at your community health project, we want to empower you to take
        charge of your SRH. We offer a range of services, including:
      </p>
      <h1>Family Planning:</h1>
      <p>
        Want to plan your family? We're here with accurate information and
        counseling about different contraceptive methods. No judgment, just
        honest facts.
      </p>
      <p>
        We offer a wide variety of affordable and high-quality contraceptives,
        including condoms, pills, and implants. So you can choose the method
        that works best for you.
      </p>
      <p>
        Life happens, and sometimes plans change. We also have emergency
        contraception available if needed.
      </p>
      <div className="flex gap-8 pt-4 mr-4 ">
        <Image
          src="https://images.pexels.com/photos/5217964/pexels-photo-5217964.jpeg?auto=compress&cs=tinysrgb&w=800"
          w={500}
          h={400}
          className="pt-2 pb-4 rounded-xl"
        />

        <Image
          src="https://images.pexels.com/photos/3873148/pexels-photo-3873148.jpeg?auto=compress&cs=tinysrgb&w=800"
          w={500}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />

        <Image
          src="https://www.independent.co.ug/wp-content/uploads/2019/07/HIV-tests.jpg"
          w={300}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />

        <Image
          src="https://images.pexels.com/photos/8680265/pexels-photo-8680265.jpeg?auto=compress&cs=tinysrgb&w=800"
          w={300}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />
      </div>
      <h1 className="font-bold text-center pb-4 text-2xl">
        Preconception and Pregnancy Care:
      </h1>
      <p>
        Thinking about starting a family? Come see us for pre-pregnancy
        counseling and checkups. We can help you prepare for healthy pregnancy
        and a happy future.
      </p>
      <p>
        Regular antenatal care throughout your pregnancy is essential for both
        you and your baby. We offer comprehensive checkups and monitoring at
        every step.
      </p>
      <p>
        And when it's time, we can connect you with skilled healthcare
        professionals for a safe and supported delivery.
      </p>
      <div className="flex gap-2 mr-2">
        <Image
          src="https://static.euronews.com/articles/stories/06/30/97/76/1000x563_cmsv2_788400e7-9df9-56be-ba6f-6453e59db337-6309776.jpg"
          w={500}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />

        <Image
          src="https://nilepost.co.ug/wp-content/uploads/2018/05/Pregnant-woman.jpg"
          w={400}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />

        <Image
          src="https://www.healthynewbornnetwork.org/hnn-content/uploads/66636-xprfsgotoh-1503593003.jpg"
          w={400}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />
      </div>

      <h1 className="text-center font-bold pb-4 text-2xl">
        Postnatal Care and Breastfeeding Support:
      </h1>
      <p>
        After birth, we're still here for you. We offer postpartum checkups and
        support for both you and your newborn.
      </p>
      <p>
        Breastfeeding can be challenging, but we're here to help. We offer
        education and support to ensure you and your baby thrive.
      </p>

      <div className="flex gap-2 ">
        <Image
          src="https://www.wvi.org/sites/default/files/inline-images/MicrosoftTeams-image%20%287%29_1.png"
          w={400}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />

        <Image
          src="https://www.urc-chs.com/wp-content/uploads/urc-usaid-rhites-ec-uganda-breastfeeding.jpg"
          w={400}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />

        <Image
          src="https://www.worldbank.org/content/dam/photos/780x439/2017/may-5/ug-vouchers-that-make-having-a-baby-safe-and-cheap-for-some-ugandan-women-homepage-780x439.jpg"
          w={500}
          h={400}
          className="pt-2 pb-4 rounded-lg"
        />
      </div>
      <div className="pb-4">
        <h1 className="font-bold text-center text-2xl">Sexual Health:</h1>
        <p>
          Worried about STIs or HIV? We provide confidential and affordable
          testing and treatment. Your health is our top priority.
        </p>
        <p>
          Prevention is key, so we also offer educational resources and
          community outreach programs to raise awareness about STIs and
          HIV/AIDS.
        </p>
      </div>
    </div>
</div>
  )
}
