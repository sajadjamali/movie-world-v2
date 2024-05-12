"use client"
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@/components/TabPanel';
import { useMediaQuery } from '@mui/material';
import MyAccordion from '@/components/muiComponents/MyAccordion';

const Page = () => {

    const [value, setValue] = useState(0);
    const isMediumScreen = useMediaQuery('(min-width: 450px)');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className='px-3 py-10 min-[400px]:w-11/12 md:w-9/12 lg:w-7/12 mx-auto'>
            <Box sx={{ backgroundColor: '#27272a', color: 'white', borderRadius: '10px', zIndex: 100 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        sx={{
                            '.MuiTabs-flexContainer': {
                                justifyContent: 'space-around',
                            },
                        }}
                        orientation={isMediumScreen ? "horizontal" : "vertical"}
                        value={value} onChange={handleChange}
                        aria-label="basic tabs example">
                        <Tab sx={{ color: 'yellow' }} className='md:text-base' label="About Us" />
                        <Tab sx={{ color: 'yellow' }} className='md:text-base' label="Rules" />
                        <Tab sx={{ color: 'yellow' }} className='md:text-base' label="Questions" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nam eveniet neque? Accusamus cum et reprehenderit nisi eum quidem animi odit facere? Voluptate dolorum, natus autem, cupiditate impedit aperiam atque quaerat rem quam nisi ex? Voluptatem ullam sed aliquid sapiente eius at reprehenderit veniam soluta dolore porro aperiam dolorum esse sint eaque repudiandae, harum rerum! Culpa excepturi officia quaerat repudiandae molestiae ipsum quo quam animi maxime, aliquam error labore maiores, odio et sit. Itaque ea, voluptatum nam aliquid impedit veniam laboriosam ut. Commodi iure tempore repudiandae itaque nostrum ullam labore reprehenderit necessitatibus tenetur corporis fugit numquam rem, amet perspiciatis ut accusamus omnis aut molestiae. Nostrum veniam quod minus quos, est quae enim repellendus dolorem, magnam vitae modi sequi, omnis dolorum corporis doloribus. Laborum, sed corporis nostrum ab ducimus, eligendi quia architecto porro enim, possimus excepturi quaerat harum! Laborum magnam, odio veritatis, laudantium eaque ipsa nulla quos ratione laboriosam ipsum maiores cupiditate minus itaque provident necessitatibus excepturi nostrum voluptatem? Autem consectetur alias reprehenderit unde, praesentium amet adipisci! Modi aperiam odit facere nesciunt magni accusamus sunt tenetur aspernatur at adipisci placeat hic suscipit ducimus, beatae excepturi repudiandae, sapiente aut id mollitia amet animi veniam cupiditate voluptas magnam. Necessitatibus accusantium aut recusandae, odit fugit quae? Repellat illum vitae nostrum in, alias voluptatem tempore eos eveniet eligendi ratione praesentium harum, deserunt adipisci iure consectetur, ipsum quam nemo animi delectus magni natus aliquam asperiores. Accusamus doloribus minus aspernatur. Quisquam doloremque architecto expedita veniam asperiores, saepe veritatis quos eveniet fuga tenetur amet. Pariatur quam exercitationem animi necessitatibus nesciunt a laudantium quidem delectus quibusdam possimus in ratione ab asperiores, saepe quaerat quod voluptatibus aspernatur eum id tempora corrupti. Maiores dolorum cum, incidunt unde, repellendus, quae consectetur assumenda ad fuga necessitatibus veniam? Eum officiis rem a? Odio, accusantium consequuntur mollitia dolor magni, porro excepturi vitae sit beatae cumque dignissimos molestias similique magnam ab voluptas nihil optio minus pariatur in quisquam? Et pariatur nam quaerat itaque mollitia, odio repellat, natus repudiandae beatae cumque aut a voluptate provident, tempora sapiente? Accusamus eaque exercitationem veritatis alias? Doloribus, possimus modi excepturi iusto quibusdam ipsa nulla similique ipsum sunt debitis porro voluptates tempore rem maiores reprehenderit? Consectetur nisi eum officiis reprehenderit veritatis placeat et assumenda quaerat, itaque eveniet. Repellat ipsum, doloremque deserunt tempore impedit id accusantium aliquam ex error exercitationem maxime corporis sit dignissimos laudantium soluta itaque alias nobis eum velit excepturi pariatur obcaecati, eaque aspernatur voluptates. Corrupti iste nihil recusandae magni dolorem quidem, facere molestias mollitia, similique optio doloremque saepe pariatur repellendus voluptate omnis corporis perspiciatis veniam cupiditate. Sequi hic vitae soluta quam est explicabo et ipsum aperiam exercitationem, vero perferendis rerum cupiditate fugit sit eaque quas officia nostrum repudiandae vel? Accusantium fuga est reprehenderit ipsum, magnam eveniet, aliquid saepe impedit eos, delectus quaerat consequatur maiores excepturi minus provident. Inventore, nobis dolorem est tempora pariatur eum error voluptatum fugit nisi, impedit reprehenderit. Illo earum sunt voluptatem at officia quis! Odio ab tenetur et rem provident sint doloribus, dignissimos consequatur illum saepe minima. Vel nisi voluptas commodi fuga sequi, impedit ab sed omnis.
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MyAccordion expanded={false} handleCloseMenu={() => { }} role="rules" />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MyAccordion expanded={false} handleCloseMenu={() => { }} role="questions" />
                </TabPanel>
            </Box>
        </div >
    );
}

export default Page;