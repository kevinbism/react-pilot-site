import { fetchMenu, fetchPage } from '@/route';
import ContentPage from '@/components/base/ContentPage';

export async function generateStaticParams() {
  const data = await fetchMenu();
  return data.menu.map(item => ({
    url: item.url,
    id: item.id,
  }));
}

const DynamicPage = async ({ params }) => {
  const { url } = await params;
  const data = await fetchMenu();
  const menuItem = data.menu.find(item => item.url === url);
  const pageData = await fetchPage();
  const pageItem = pageData.pages.find(item => item.id === menuItem.id);

  if (!menuItem) {
    return <div>Pagina non trovata</div>;
  }

  return (
    <ContentPage
      titleBreadcrumb={pageItem['title-breadcrumb']}
      title={pageItem.title}
      url={menuItem.url}
    >
      {pageItem.text}
    </ContentPage>
  );
};

export default DynamicPage;
