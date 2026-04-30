import { View, StyleSheet } from 'react-native'

import { ThemedText } from '@components/ThemedText'
import ThemedIcon from '@components/ThemedIcon'
import { Theme } from '@lib/theme/ThemeManager'
import Drawer from '@components/views/Drawer'

// 菜单列表（这里就是侧边栏的所有文字）
const ROUTES = [
    { name: '采样器', icon: 'tune', route: 'AppSettings', params: { screen: 'SamplerSettings' } },
    { name: '格式设置', icon: 'format-list-bulleted', route: 'AppSettings', params: { screen: 'FormattingSettings' } },
    { name: '模型管理', icon: 'storage', route: 'ModelManager' },
    { name: '语音合成', icon: 'volume-high', route: 'AppSettings', params: { screen: 'TTSSettings' } },
    { name: '日志', icon: 'list-alt', route: 'Logs' },
    { name: '关于', icon: 'info', route: 'About' },
    { name: '设置', icon: 'cog', route: 'AppSettings' },
]

const RouteList = () => {
    const { color, spacing } = Theme.useTheme()

    return (
        <View style={styles.container}>
            {ROUTES.map((route) => (
                <Drawer.Button
                    key={route.name}
                    onPress={() => Drawer.useDrawerStore.getState().close(Drawer.ID.SETTINGS)}
                    route={route}
                    style={styles.button}>
                    <ThemedIcon name={route.icon} size={24} color={color.text._200} />
                    <ThemedText style={[styles.text, { color: color.text._200 }]}>
                        {route.name}
                    </ThemedText>
                </Drawer.Button>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 16,
    },
})

export default RouteList                <AntDesign size={24} name={item.icon ?? 'question'} color={color.text._400} />
                <Text style={styles.largeButtonText}>{item.name}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const RouteList = () => {
    const [devMode] = useMMKVBoolean(AppSettings.DevMode)
    const { appMode } = useAppMode()
    const paths = getPaths(appMode === 'remote')
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={__DEV__ || devMode ? [...paths, ...paths_dev] : paths}
            renderItem={({ item, index }) => <DrawerButton item={item} index={index} />}
            keyExtractor={(item) => item.path.toString()}
        />
    )
}

export default RouteList

const useStyles = () => {
    const { color, spacing, fontSize } = Theme.useTheme()
    return StyleSheet.create({
        largeButtonText: {
            fontSize: fontSize.xl,
            paddingVertical: spacing.l,
            paddingLeft: spacing.xl,
            color: color.text._100,
        },

        largeButton: {
            paddingLeft: spacing.xl,
            flexDirection: 'row',
            alignItems: 'center',
        },
    })
}

const getPaths = (remote: boolean): ButtonData[] => [
    {
        name: 'Sampler',
        path: '/screens/SamplerManagerScreen',
        icon: 'control',
    },
    {
        name: 'Formatting',
        path: '/screens/FormattingManagerScreen',
        icon: 'profile',
    },
    remote
        ? {
              name: 'API',
              path: '/screens/ConnectionsManagerScreen',
              icon: 'link',
          }
        : {
              name: 'Models',
              path: '/screens/ModelManagerScreen',
              icon: 'branches',
          },
    {
        name: 'TTS',
        path: '/screens/TTSManagerScreen',
        icon: 'sound',
    },
    {
        name: 'Logs',
        path: '/screens/LogsScreen',
        icon: 'code',
    },
    {
        name: 'About',
        path: '/screens/AboutScreen',
        icon: 'info-circle',
    },
    {
        name: 'Settings',
        path: '/screens/AppSettingsScreen',
        icon: 'setting',
    },
]

const paths_dev: ButtonData[] = [
    /*{
        name: '[DEV] HF',
        path: '/HFTest',
    },*/
    {
        name: '[DEV] Components',
        path: '/screens/ComponentTestScreen',
    },
    {
        name: '[DEV] ColorTest',
        path: '/screens/ColorTestScreen',
    },
    {
        name: '[DEV] Markdown',
        path: '/screens/MarkdownTestScreen',
    },
]
