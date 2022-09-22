import { AppBar } from "../../../../components/appBar/AppBar";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";

export function TransfersValue() {
  return (
    <PageContainer>
      <ProcessPageLayout 
      appBar={<AppBar/>}
      header={''}
      main={''}
      footer={''} />
    </PageContainer>
  )
}