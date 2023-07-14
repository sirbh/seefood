import { Image, View } from 'react-native';
import { Appbar,Searchbar } from 'react-native-paper'

function Home() {
    return <>
        <Appbar.Header style={{paddingHorizontal:30}}>
            {/* <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => { }} /> */}
            {/* <Appbar.Action icon="magnify" onPress={() => { }} />  */}
            <Searchbar />
        </Appbar.Header>
        <View style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            flex:1
        }}>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
            <Image style={{
                //  flex:1,
                 width: "33.3%",
                 height: 200,
            }} source={{ uri: 'https://picsum.photos/700' }}/>
        </View>
    </>

}



export default Home;