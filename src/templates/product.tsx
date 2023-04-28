import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import "../index.css";

import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import HStack from "../components/HStack";
import Label from "../components/Label";

import BigButton from "../components/BigButton";
import CenteredContainer from "../components/CenteredContainer";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import ProductTable from "../components/ProductTable";
import Reviews from "../components/Reviews";
import VStack from "../components/VStack";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "hc",
    filter: { entityTypes: ["healthcareProfessional"] },
    localization: { locales: ["en"], primary: false },
    fields: [
      "reservationUrl.url",
      "logo.image.url",
      "name",
      "c_facility",
      "description",
      "websiteUrl.url",
      "headshot.url",
      "c_benefits",
      "c_education",
      "c_specialties",
      "c_awards",
      "c_insurances",
      "c_languages",
      "photoGallery",
      "photoGallery",
      "c_question2",
      "c_answer2",
      "c_question3",
      "c_answer3",
      "c_question1",
      "c_answer1",
      "slug",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Product({ document }: TemplateProps) {
  return (
    <>
      <PageLayout backgroundColor="#FFFFFF">
        <HeaderSimple
          backgroundColor="#ffffff"
          logo={`${document.logo.image.url}`}
        />
        <CenteredContainer>
          <GridContainer>
            <VStack>
              <Headline
                value={`${document.name}`}
                fontWeight="bold"
                textSize="4xl"
              />
              <Divider />
              <HStack>
                <Label value={`${document.c_facility}`} />
                <Reviews averageRating={5} reviewCount={1995} />
              </HStack>
              <Paragraph
                value={`${document.description}`}
                fontWeight="light"
                textSize="lg"
              />
              <VStack>
                <BigButton
                  title={`Reserve Now`}
                  href={`${document.reservationUrl.url}`}
                />
                <BigButton
                  title={`Learn More`}
                  href={`${document.websiteUrl.url}`}
                />
              </VStack>
            </VStack>
            <VStack>
              <ProductImage
                src={`${document.headshot.url}`}
                alt="a pair of skis"
              />
              <Paragraph
                value={`${document.c_benefits}`}
                textSize="base"
                fontWeight="light"
              />
            </VStack>
          </GridContainer>
          <ProductTable
            title={`Additional Information`}
            rockerType={`${document.c_education}`}
            shape={`${document.c_specialties}`}
            core={`${document.c_awards}`}
            laminates={`${document.c_insurances}`}
            sidewalls={`${document.c_languages}`}
            bindingCompatibility={``}
          />
          <Divider width={``} color={``} />
          <GridContainer>
            <HStack>
              <ProductImage
                src={`${document.photoGallery[0].image.url}`}
                alt="Light green backpack with black canvas straps and front zipper pouch."
              />
            </HStack>
            <ProductImage
              src={`${document.photoGallery[1].image.url}`}
              alt="Light green backpack with black canvas straps and front zipper pouch."
            />
          </GridContainer>
          <Divider width={``} color={``} />
          <VStack>
            <Headline
              value={`Frequently Asked Questions`}
              textSize="xl"
              fontWeight="medium"
            />
            <Label value={`${document.c_question2}`} />
            <Paragraph
              value={`${document.c_answer2}`}
              textSize="base"
              fontWeight="normal"
            />
            <Label value={`${document.c_question3}`} />
            <Paragraph
              value={`${document.c_answer3}`}
              textSize="base"
              fontWeight="normal"
            />
            <Label value={`${document.c_question1}`} />
            <Paragraph
              value={`${document.c_answer1}`}
              textSize="base"
              fontWeight="normal"
            />
          </VStack>
          <Divider width={``} color={``} />
        </CenteredContainer>
      </PageLayout>
      <Footer
        paragraph={``}
        logo={`${document.logo.image.url}`}
        company={`Grateful Healthcare`}
      />
    </>
  );
}
