export default function ({$device}) {
    $device.layout = $device.isMobileOrTablet ? 'mobile' : 'desktop'
}