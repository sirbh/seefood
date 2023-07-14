import { FlatList, Image, View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper'

const DATA = Array.from(Array(20).keys()).map(n=>({
    title:'https://picsum.photos/7'+n
}))
function Home() {
    return <View style={{
        height:'100%'
    }}>
        <Appbar.Header style={{ paddingHorizontal: 30 }}>
            <Searchbar />
        </Appbar.Header>
        {/* <ScrollView
            contentContainerStyle={{
                flexWrap: 'wrap',
                flexDirection: 'row'
            }}
        >
            <Image style={{ width: '33.3%', height: 200 }} source={{
                uri: 'https://picsum.photos/700'
            }}></Image>
            <Image style={{ width: '33.3%', height: 200 }} source={{
                uri: 'https://picsum.photos/700'
            }}></Image>
        </ScrollView> */}
        <FlatList 
        // style={{flex:1}}
        numColumns={3}
        data={DATA}
        renderItem={({item})=> <Image style={{ width:'33.33%',height: 200 }} source={{
            uri: item.title
        }}></Image>}
        keyExtractor={item => item.title}
        />
    </View>
}



export default Home;