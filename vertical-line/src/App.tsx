import VerticalLine from './components/VerticalLine'

export default function App() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
      }}
    >
      <VerticalLine />
    </div>
  )
}
